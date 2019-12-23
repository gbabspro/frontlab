'use strict';

import verto from '../verto_chat/verto';
import { Verto } from '../verto_chat/verto';


export function verto_params() {


	return {
		login: "",
		passwd: "",
		socketUrl: "wss://srv.babacargaye.com:8082",
		tag: "webcam",
		ringFile: "/assets/sounds/bell_ring2.mp3",
		iceServers: [
			// { url: 'stun:[YOUR_STUN_SERVER]',}
		],
		deviceParams: {
			useMic: 'any',
			useSpeak: 'any'
		}
	}
}

export const verto_callbacks = {
	onMessage: function(verto, dialog, msg, data) {
		console.log("GOT MSG", msg);

		switch (msg) {
		case Verto.enum.message.pvtEvent:
			console.error("pvtEvent", data.pvtData);
			break;
		case Verto.enum.message.display:
			break;
		default:
			break;
		}
	},

	onDialogState: function(d, detail, bubbles) {

		var customEvent = new CustomEvent("verto-dialog-state",  {
			detail: d,
			bubbles: bubbles ? bubbles : false
		});
	
		window.dispatchEvent(customEvent);

		// fire_event("verto-dialog-state", d);
	},

	onWSLogin: function(v, success, bubbles) {
		console.log("onWSLogin", v);
		console.log("onWSLogin", success);
		var verto_loginState = true;
		verto.domain = "wss://srv.babacargaye.com:8082";

		if (!success) {
			verto_loginState = false;

			// fire_event("verto-login-error", v);
			var customEvent = new CustomEvent("verto-dialog-state",  {
				detail: v,
				bubbles: bubbles ? bubbles : false
			});
		
			window.dispatchEvent(customEvent);

			verto.logout();
			return;
		}

		// setCookie("freeswitch_xtra_session_id", v.sessid);

		var customEvent = new CustomEvent("verto-dialog-state",  {
			detail: v,
			bubbles: bubbles ? bubbles : false
		});
	
		window.dispatchEvent(customEvent);


		// fire_event("verto-login", v);

		verto.fsStatus(function(s, bubbles) {
			// fire a "update-status" event so the OverView component can update
			var customEvent = new CustomEvent("verto-dialog-state",  {
				detail: s,
				bubbles: bubbles ? bubbles : false
			});
		
			window.dispatchEvent(customEvent);

			// fire_event("update-status", s);
		});
	},

	onWSClose: function(v, success, bubbles) {
		console.log("onWSClose", v);

		var customEvent = new CustomEvent("verto-dialog-state",  {
			detail: v,
			bubbles: bubbles ? bubbles : false
		});
	
		window.dispatchEvent(customEvent);

		// fire_event("verto-disconnect", v);
	},

	onEvent: function(v, e) {
		console.debug("GOT EVENT", e);
	}
};
