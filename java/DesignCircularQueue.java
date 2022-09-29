package java;
import java.util.ArrayList;
import java.util.List;
/**
 * O objetivo aqui é criar uma estrutura de dados circular, com um número máximo de elementos
 * que podem ser adicionados no final da fila e removidos partindo da primeira posição.
 * Também podemos pegar o elemento que está na frente e no fim da fila pelos métodos Front e Rear respectivamente.
 */
/**
 * Class that represents a Circular queue, with a max size
 * You can remove the elements from the beginning and add more in the end
 * You can also get the first and last elements of it  
 */

class DesignCircularQueue {

    private List<Integer> queue;
    private int maxSize;

    public DesignCircularQueue(int k) {
        this.queue = new ArrayList<Integer>();
        this.maxSize = k;
    }
    
    // Adds element
    public boolean enQueue(int value) {
        if (this.queue.size() + 1 > this.maxSize) {
            return false;
        }
        this.queue.add(value);
        return true;
    }
    // Removes the element in the first position
    public boolean deQueue() {
        try {
            this.queue.remove(0);
            return true;
        } catch(Exception e) {
            return false;
        }
    }
    // Returns the first position
    public int Front() {
        try {
            return this.queue.get(0);
        } catch(Exception e) {
            return -1;
        }
    }
    // Returns the element in the last position occupied
    public int Rear() {
        try {
            return this.queue.get(this.queue.size() - 1);
        } catch(Exception e) {
            return -1;
        }
    }
    
    public boolean isEmpty() {
        return this.queue.isEmpty();
    }
    
    public boolean isFull() {
        return this.queue.size() >= this.maxSize;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * MyCircularQueue obj = new MyCircularQueue(k);
 * boolean param_1 = obj.enQueue(value);
 * boolean param_2 = obj.deQueue();
 * int param_3 = obj.Front();
 * int param_4 = obj.Rear();
 * boolean param_5 = obj.isEmpty();
 * boolean param_6 = obj.isFull();
 */
