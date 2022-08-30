import { useState, useEffect } from "react";
let speech;

if (window.webkitSpeechRecognition) {
  const SpeechRecognition = window.webkitSpeechRecognition ;
  speech = new SpeechRecognition();
  speech.continuous = true;
} else {
  speech = null;
}

const useVoice = () => {
  const [isListening, setIsListening] = useState(false);

 

  const listen = () => {
    setIsListening(!isListening);
    if (isListening) {
      speech.stop();
      window.location.reload()
    } else {
      speech.start();
    }
  };

  useEffect(() => {
    if (!speech) {
      return;
    }
    speech.onresult = (event) => {
      setIsListening(false);
      speech.stop();
      let g = document.getElementById('___gcse_0')
      g.style.display='block'
      let ser = document.getElementById('gsc-i-id1')
      ser.focus()
      ser.value = event.results[event.results.length - 1][0].transcript
    };
  }, []);

  return {
    isListening,
    listen,
    voiceSupported: speech !== null
  };
};

export { useVoice };