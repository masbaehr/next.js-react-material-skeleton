import { store } from 'react-notifications-component';


export function showNotification(message, type, duration){

    store.addNotification({
      title: "",
      width: 300,
      message: message,
      type: type,
      insert: "top",
      container: "top-center",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: duration !== undefined ? duration : 8000,
        onScreen: true
      }
    });
  
  }