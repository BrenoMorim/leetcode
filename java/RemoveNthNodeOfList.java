package java;
import java.util.ArrayList;
import java.util.List;

/**
 * O objetivo aqui é remover um elemento de uma singly-linked list, sendo que o número recebido
 * por parâmetro é o índice que deve ser removido da lista, porém contado de forma decrescente,
 * por exemplo caso n = 1, devemos remover o último elemento da lista, e então retornar o primeiro elemento.
 */

/**
 * The goal here is to remove a node of a singly-linked list and then returning the first element of it.
 * One important detail is that we have to remove the nth last node, for example, if the 
 * number given is 1, we have to remove the last element of the list.
 */

public class RemoveNthNodeOfList {
    public class ListNode {
        int val;
        ListNode next;
        ListNode() {}
        ListNode(int val) { this.val = val; }
        ListNode(int val, ListNode next) { this.val = val; this.next = next; }
    }
 
    public ListNode removeNthFromEnd(ListNode head, int n) {
        
        List<ListNode> listNodes = new ArrayList<ListNode>();
        do {
            listNodes.add(head);
            head = head.next;
        } while (head != null);
            
        // Check if it's empty
        if (listNodes.size() - 1 <= 0) return null;
        
        // Check if there's more items after the one that was removed
        if (listNodes.size() >= n) {
            Integer position = listNodes.size() - n;

            // Removes of the linked list if it's not the first element
            if (listNodes.size() != n)
                listNodes.get(position - 1).next = null;
            
            // Replace the element of the linked list if it's not in the end nor in the beginning
            if (position < listNodes.size() - 1 && position - 1 >= 0)
                listNodes.get(position - 1).next = listNodes.get(position + 1);

            listNodes.remove(position.intValue());
        }
        
        return listNodes.get(0);
    }
}
