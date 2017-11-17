Answeres to questions in README.md

1. In a stack the insertion removal is first in, last out or FILO. For Queues it is first in first out, or FIFO

2. The retrieal time complexity for both sorted and unsorted linked lists is O(n). For hash tables this is O(1). This means that as the linked list grows, it takes a linear amount of time as the list grows, while hash tables take a constant time no matter how large or small. Assuming that a binary search tree is balanced, it will O(log n). This means as the tree grows, it will take less and less time for retrieval, and most of the time taken is in the beginning. If a tree is not balanced it will obviously take a longer time on the side with more data, but you can rebalance a tree as needed. Balancing a tree might change its meaning, so it is not always possible, but it is often deferred to doing it a convenient time (such after x modifications) rather than balancing all the time.

3. Advantages to using a hash table over an array, are that hash tables use an internal algorightm to come up with a hash key so that each time it's ran, the retrieval knows exactly what index it is in, where you have to go over a whole array to find a value if you don't know the index. There are times when hash tables will have collisions, and in this case a linked list is formed in the buckets, and may take a little longer. In most cases though, O(1) for hash tables, compared to O(n) for arrays. In the ideal scenario, there were be few collisions, and few empty buckets. 

