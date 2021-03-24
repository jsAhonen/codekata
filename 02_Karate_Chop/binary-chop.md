# Karate Chop

This is a rather mathematical challenge, and trained to think how algorithms work. I have created one way to work out the binary search. 

## Errors

- Timeout issues: How to make sure that the algorithm does not get stuck in a loop? My solution was to give it a limited number of tries in the while loop.
- Rounding issues: At each iteration, the next move is half of the previous one. How to round the move to an even number so that it does not get stuck in a "move 0" situation before finding the number?
- Target number not in the array: what if the target number does not exist in the array?

## How to come up with more than one approach?

I don't know how to write this in JavaScript in another way, without resorting to libraries. I need to think about this. Could there be more than one way to create it?

