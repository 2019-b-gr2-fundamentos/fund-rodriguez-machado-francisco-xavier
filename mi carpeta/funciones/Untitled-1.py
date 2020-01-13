
'''
Productor  Consumidor con Turno e Indicador 
Controla 1 productor y 1 consumidor
@author: Leo
'''

import threading
import random
from time import sleep
from _ast import Num

buffer = [];
MAX_NUM = 10;
Contador = 0;
quiere1=False;
quiere2=False;
turno=1;


class Productor(threading.Thread):
    def __init__(self,num):
        threading.Thread.__init__(self)
        self.num=num;
        
    
    def run(self):
        print("\n soy el hilo " + str(self.num)+" productor con buffer " )
        global Contador
        global quiere1
        global turno
        
        
        quiere1 = True;
        turno=2;
        
            
        while(quiere2 & turno ==2):
            {}
            
        while(Contador==MAX_NUM):
            {}
        print("se va a agregar el dato:"+str(self.num));
        buffer.append(self.num);
        print("dato guardado: "+str(self.num))  ;
          
        Contador=Contador+1;
        print("Contador: "+str(Contador));
        quiere1=False;
        

class Consumidor(threading.Thread):
    def __init__(self,num):
        threading.Thread.__init__(self)
        self.num=num
    
    def run(self):        
        print("\n soy el hilo consumidor "+str(self.num) + " con buffer ")
        global Contador
        global quiere2
        global turno
        
        
        quiere2 = True;
        turno=1;
            
        while(quiere1 & turno ==1):
            {}
        
        while(Contador==0):
            {}
        
           
        num = buffer.pop(Contador-1);
        print("Dato leido: "+str(num));
        #sleep(2) #add 
        Contador=Contador-1;
        print ("Contador "+str(Contador));
        
        quiere2=False;
        

if __name__ == '__main__':
    print("Starting Test")
    
    Productores = [Productor(1), Productor(2),Productor(3), Productor(4),Productor(5)]
    
    for h in Productores:
        h.start()
        sleep(1) #comment
    
    sleep (2) #comment
    
    Consumidores = [Consumidor(1), Consumidor(2),Consumidor(3),Consumidor(4), Consumidor(5)]
    
    for m in Consumidores:
        m.start()
        sleep(1) #comment

    

 
    