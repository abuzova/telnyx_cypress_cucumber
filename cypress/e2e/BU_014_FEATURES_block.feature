Feature: BU_014_FEATURES_block

Background:
Given I navigate to the Website
 
#Background:
#Given I want to navigate to telnyx.com and close cookies pop-up window 
#Given I want to go to the "Solutions" page

#Given I want go to the "Account notifications" page
#When I am on the "Account notifications" page

#Scenario Outline: I want to validate FEATURES block 
#Then Validate FEATURES block data <number> <title_of_article>
#Examples:
#    | number |  title_of_article                            |  describe_of_article                                                                                                                                                                                      |        
#    |   1    |  Powerful voice API features out of the box  |  Build programmable voice applications like you would build a web app—simple HTTP commands or XML scripting unlocks a toolkit of features including call flow control, recordings, conferencing and more. | 
#    |   2    |  Conference calling                          |  Connect people and teams across the globe with feature-rich audio conferencing.                                                                                                                          |
#    |   3    |  Media streaming                             |  Access the raw audio stream of calls in real-time to integrate advanced AI/ML capabilities.                                                                                                              |
#    |   4    |  Text-to-speech                              |  Speak dynamic text in 29 languages and accents, powered by Amazon Polly.                                                                                                                                 |
#    |   5    |  Answering machine detection                 |  Detect voicemail systems with exceptional accuracy using advanced AI techniques.                                                                                                                         |
#    |   6    |  Speech-to-text                              |  Real-time transcription and diarization on a live call, activated via one API command.                                                                                                                   |
#    |   7    |  Smart IVR                                   |  Build a multi-level interactive voice response (IVR) phone tree to intelligently route your call flows via DTMF or voice commands.                                                                       | 
    
Scenario Outline: I want to validate FEATURES block 
Then Validate FEATURES title block data
    | number |  title_of_article                            |  describe_of_article                                                                                                                                                                                      |        
    |   1    |  Powerful voice API features out of the box  |  Build programmable voice applications like you would build a web app—simple HTTP commands or XML scripting unlocks a toolkit of features including call flow control, recordings, conferencing and more. | 
        
Then Validate FEATURES subblock data
    | number |  title_of_article                            |  describe_of_article                                                                                                                |        
    |   1    |  Conference calling                          |  Connect people and teams across the globe with feature-rich audio conferencing.                                                    |
    |   2    |  Media streaming                             |  Access the raw audio stream of calls in real-time to integrate advanced AI/ML capabilities.                                        |
    |   3    |  Text-to-speech                              |  Speak dynamic text in 29 languages and accents, powered by Amazon Polly.                                                           |
    |   4    |  Answering machine detection                 |  Detect voicemail systems with exceptional accuracy using advanced AI techniques.                                                   |
    |   5    |  Speech-to-text                              |  Real-time transcription and diarization on a live call, activated via one API command.                                             |
    |   6    |  Smart IVR                                   |  Build a multi-level interactive voice response (IVR) phone tree to intelligently route your call flows via DTMF or voice commands. |


