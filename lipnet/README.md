# RecogLip: Sentence Level Lip Reading Headgear
Keras implementation of the method described in the paper 'LipNet: End-to-End Sentence-level Lipreading' by Yannis M. Assael, Brendan Shillingford, Shimon Whiteson, and Nando de Freitas 

PROJECT
OVERVIEW
Main idea is to create a headgear
with camera module near users lips
A model which predicts text from
lips movement

# Reference
(https://arxiv.org/abs/1611.01599).

## Evaluation
To evaluate and visualize the trained model on a single video / image frames, you can execute the following command:
```
./predict [path to weight] [path to video]
```
**Example:**
```
./predict evaluation/models/overlapped-weights368.h5 evaluation/samples/id2_vcd_swwp2s.mpg
```
