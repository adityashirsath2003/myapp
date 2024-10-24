from ibm_watson import NaturalLanguageUnderstandingV1
from ibm_watson.natural_language_understanding_v1 import Features, EmotionOptions
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator

def emotion_predictor(text):
    authenticator = IAMAuthenticator('<your_watson_api_key>')
    nlu = NaturalLanguageUnderstandingV1(
        version='2021-08-01',
        authenticator=authenticator
    )

    nlu.set_service_url('<your_service_url>')

    response = nlu.analyze(
        text=text,
        features=Features(emotion=EmotionOptions())).get_result()

    return response['emotion']['document']['emotion']

if __name__ == "__main__":
    # Example usage
    text = "I am very happy today!"
    emotions = emotion_predictor(text)
    print(emotions)
