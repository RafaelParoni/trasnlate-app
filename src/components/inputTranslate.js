import './Components.css';
import axios from 'axios'
import { useEffect, useRef, useState } from 'react';
import {PiArrowsLeftRightBold, PiArrowClockwiseBold, PiXBold, PiCopyBold, PiSpeakerHighBold } from 'react-icons/pi'
import {LuAlertTriangle} from 'react-icons/lu'


 function Title(){

    const textAreaRef = useRef(null);
    const [val, setVal] = useState("");
    const handleChange = (e) => {
        setVal(e.target.value);
    }
    var VoiceLing = 'pt-br'
    
    
    useEffect(() => {
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }, [val])


    function ResetTranslate(){
        document.getElementById('translateLingInput').value = ''
        document.getElementById('translateLingInput').style.height = 'auto'
        document.getElementById('translateLingInput').innerHTML = ''
        document.getElementById('translateLingResult').value = ''
        document.getElementById('translateLingResult').style.height = 'auto'
        document.getElementById('translateLingResult').innerHTML = ''
    }
    function CopyTranslate(){
        var Value = document.getElementById('translateLingResult').value
        navigator.clipboard.writeText(Value)
    }
    function SpeekText(){
        VoiceLing = document.getElementById('lings').value
        var text = document.getElementById('translateLingResult').value
        let paragraph = new SpeechSynthesisUtterance(text);
        paragraph.lang = VoiceLing
        speechSynthesis.speak(paragraph)
    }
  
    return (
        <div className='InputsDiv'>
            <div className='inputTranslate'>
                <div className='InputLing'><spam id='TranslateLingDetect'>Auto detector</spam></div>
                <a className='ExtraButton'><button onClick={()=> ResetTranslate()} style={{top: '7px'}}> <PiXBold color='fff'/> </button></a>
                <a><textarea id='translateLingInput' autoCorrect='on' autoComplete='on' type='text' wrap="hard" className='p-1 bg-neutral-700 active:outline-none focus:outline-none rounded' value={val}  onChange={handleChange} rows="2" ref={textAreaRef}/></a>
            </div>  
            <a id='TranslateLoadOff'><PiArrowsLeftRightBold color='fff'/></a>
            <a id='TranslateLoadOn'><PiArrowClockwiseBold color='fff'/></a>
            <a id='TranslateLoadError'><LuAlertTriangle/></a>
            <div className='inputTranslate select'>
                <input type='hidden' id='TranslateLingOnly' value={'us'} />
                <form>
                    <select className='InputLingInput'  id='lings' name='lings'>
                        <option value={`en`}>Ingles</option>
                        <option value={`es`}>Espanhol</option>
                        <option value={`fr`}>Frances</option>
                        <option value={`ja`}>Japones</option>
                        <option value={`pt`}>Português</option>
                        <option value={`pt-PT`}>Português (Portugal)</option>
                        <option value={`ru`}>Russo</option>
                        <option value={`zh-Hans`}>Chinês (Simplificado)</option>
                        <option value={`zh-Hant`}>Chinês (Tradicional)</option>
                        <option value={`uk`}>Ucraniano</option>
                        <option value={`pl`}>Polonês</option>
                    </select>
                </form>
                <a className='ExtraButton' ><button onClick={()=> CopyTranslate()} style={{top: '12px'}}> <PiCopyBold color='fff'/> </button></a>
                <a className='ExtraButton' ><button onClick={()=> SpeekText()} style={{top: '30px'}}> <PiSpeakerHighBold color='fff'/> </button></a>
                <a><textarea id='translateLingResult' readOnly type='text' wrap="hard"   rows="2" /></a>
            </div>     
        </div>
    );
}

export default Title;