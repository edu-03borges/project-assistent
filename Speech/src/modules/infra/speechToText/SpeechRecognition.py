import time
import sys
import os
import azure.cognitiveservices.speech as speechsdk

dirTemp = os.path.abspath(os.getcwd())

sys.path.append('{}\\src\\shared\\infra\\http\\routes'.format(dirTemp))
sys.path.append('{}\\src\\modules\\infra\\textToSpeech'.format(dirTemp))

import SpeechSynthesis
import PhrasesRoutes

key = "11b6340f7a4e4f68a92a579f94ae80e7"
region = "brazilsouth"

def recognize_from_microphone():
    speech_config = speechsdk.SpeechConfig(subscription=key, region=region)
    speech_config.speech_recognition_language="pt-BR"

    audio_config = speechsdk.audio.AudioConfig(use_default_microphone=True)
    speech_recognizer = speechsdk.SpeechRecognizer(speech_config=speech_config, audio_config=audio_config)

    done = False

    def stop_cb(evt):
        print('CLOSING on {}'.format(evt))
        speech_recognizer.stop_continuous_recognition()
        nonlocal done
        done = True

    #speech_recognizer.recognizing.connect(lambda evt: print('RECOGNIZING: {}'.format(evt)))
    #speech_recognizer.recognized.connect(lambda evt: print('RECOGNIZED: {}'.format(evt)))
    #speech_recognizer.session_started.connect(lambda evt: print('SESSION STARTED: {}'.format(evt)))
    #speech_recognizer.session_stopped.connect(lambda evt: print('SESSION STOPPED {}'.format(evt)))
    #speech_recognizer.canceled.connect(lambda evt: print('CANCELED {}'.format(evt))) 

    def returnText(text):

        word = PhrasesRoutes.pharaseRouter(text)

        print(word)

        SpeechSynthesis.speech_synthesis(word)

    speech_recognizer.recognized.connect(lambda evt: returnText(evt.result.text))

    speech_recognizer.session_stopped.connect(stop_cb)
    speech_recognizer.canceled.connect(stop_cb)

    speech_recognizer.start_continuous_recognition()
    while not done:
        time.sleep(.5)