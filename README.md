# RecogLip
A wearable lipreading headgear which will predict text without audio

# Commands to run (Manual)
conda create -n tf5 python=3.5
conda activate tf5 
pip install keras==2.3.1
pip install tensorflow==1.4.0
pip install numpy
pip install cmake
pip install dlib
pip install scikit-video
pip install matplotlib
pip install mediapipe==0.8.9
pip install opencv-python
pip install protobuf==3.20.*

# Facemesh
to check the comparsion between dlib face detector which works almost same with less granualarity

# Training
The first phase of training is to intend on Lombard dataset which is extension of Grid corpus with side angle provided(** https://spandh.dcs.shef.ac.uk//avlombard/ **)

The other phase involves training the model on higher complex sentences which have more than one syllable. In order to make usuable headgear.
(Note : this dataset is partially labelled. It is yet to be explored)

# React App
**npm init** to install dependencies
**npm start** to run the app

