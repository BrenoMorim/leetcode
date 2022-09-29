package java;

import java.util.ArrayList;

/**
 * O objetivo aqui é bem parecido com o exercício MergeTwoSortedLists,
 * tanto que boa parte do código é igual, a diferença aqui é que nós temos
 * várias singly-linked lists para juntar e não apenas duas.
 */

/**
 * The goal here is to merge an array of many singly-linked lists into
 * one sorted singly-linked list.
 */

public class MergeKSortedLists {

    public class ListNode {
        int val;
        ListNode next;
        ListNode() {}
        ListNode(int val) { this.val = val; }
        ListNode(int val, ListNode next) { this.val = val; this.next = next; }
    }

    public ListNode mergeKLists(ListNode[] lists) {
        ArrayList<ListNode> mergedLists = new ArrayList<ListNode>();
        for (ListNode list : lists) {
            while (list != null) {
                mergedLists.add(list);
                if (list.next == null)
                    break;
                list = list.next;
            }
        }

        if (mergedLists.size() == 0) return null;

        mergedLists.sort((node1, node2) -> node1.val - node2.val);

        for (int i = 0; i < mergedLists.size(); i++) {
            try {
                mergedLists.get(i).next = mergedLists.get(i + 1);
            } catch(Exception e) {
                mergedLists.get(i).next = null;
                break;
            }
        }
        return mergedLists.get(0);
    }
}
