package java;

import java.util.ArrayList;

/**
 * The goal of this exercise is to merge two singly-linked lists and then sort the result.
 */

public class MergeTwoSortedLists {

    public class ListNode {
        int val;
        ListNode next;
        ListNode() {}
        ListNode(int val) { this.val = val; }
        ListNode(int val, ListNode next) { this.val = val; this.next = next; }
    }

    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ArrayList<ListNode> nodes = new ArrayList<ListNode>();
        while (list1 != null) {
            nodes.add(list1);
            if (list1.next == null)
                break;
            list1 = list1.next;
        } 
        while (list2 != null) {
            nodes.add(list2);
            if (list2.next == null)
                break;
            list2 = list2.next;
        }

        if (nodes.size() == 0) return null;

        nodes.sort((node1, node2) -> node1.val - node2.val);

        // Fixes the linkings of each element
        for (int i = 0; i < nodes.size(); i++) {
            try {
                nodes.get(i).next = nodes.get(i + 1);
            } catch(Exception e) {
                // If it's the last element there will be an error, so we finish the list with null
                nodes.get(i).next = null;
            }
        }
        return nodes.get(0);
    }
}
