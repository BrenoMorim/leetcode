import java.math.BigInteger;

/**
 * O objetivo deste desafio é somar dois números armazenados com os dígitos reversos, 
 * na forma de ListNode, que são uma classe que representa um tipo especial de lista, 
 * onde cada elemento é unido ao próximo, através do atributo next. 
 * A parte desafiadora é a grande quantidade de passos: converter os objetos ListNode em String, 
 * que precisa ser revertida, e depois em números para poder realizar a soma e depois fazer o inverso.
 */
/**
 * The goal of this exercise is to sum two numbers that are stored as a ListNode,
 * which represents a singly-linked list. An important detail is that these numbers are stored in reverse order.
 */
public class AddTwoNumbers {
    
    // Class definition for ListNode (singly-linked list)
    public class ListNode {
        int val;
        ListNode next;
        ListNode() {}
        ListNode(int val) { this.val = val; }
        ListNode(int val, ListNode next) { this.val = val; this.next = next; }
    }

    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        StringBuilder digits1 = new StringBuilder();
        StringBuilder digits2 = new StringBuilder();
        do {
            digits1.append(String.valueOf(l1.val));
            l1 = l1.next;
        } while (l1 != null);
        do {
            digits2.append(String.valueOf(l2.val));
            l2 = l2.next;
        } while (l2 != null);
        
        // Since there are numbers that are way too big to be stored
        // as normal Integers in the TestCase, I used BigInteger from java.math

        BigInteger num1 = new BigInteger(digits1.reverse().toString()); 
        BigInteger num2 = new BigInteger(digits2.reverse().toString()); 

        BigInteger sum = num1.add(num2);

        String[] digits3 = sum.toString().split("");
        ListNode[] listNodes = new ListNode[digits3.length];

        int position = 0;
        for (int i = digits3.length - 1; i >= 0; i--) {
            listNodes[position] = new ListNode(Integer.valueOf(digits3[i]));
            position++;
        }

        for (int i = 0; i < listNodes.length - 1; i++) {
            listNodes[i].next = listNodes[i + 1];
        }

        return listNodes[0];
    }
}
