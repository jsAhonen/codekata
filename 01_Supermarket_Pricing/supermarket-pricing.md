# Supermarket Pricing

Spend time considering issues such as:

- does fractional money exist?
- when (if ever) does rounding take place?
- how do you keep an audit trail of pricing decisions (and do you need to)?
- are costs and prices the same class of thing?
- if a shelf of 100 cans is priced using “buy two, get one free”, how do you value the stock?

## An Example and Preliminary Observations

Let's say we have 1,000 cans of beans at the supermarket, and each can is bought for 0.45 € to the store. The store wants to sell it for 0,75 €. Now, what are my first observations and questions that arise from this?

- The unit is in cans of beans. The alternatives are volume and mass. Can of beans is the fundamental unit of counting. In another project I had, there was a unit of laundry, which awoke this question: what is "one laundry"? Is it a set of sheets, one item, or one kilogram? So, you need to consider the unit of measurement.
- What is the price this was procured for? This measures the cost of the beans. The expense. The financial burden. This is then contrasted with the pricing at the supermarket. And the difference between the two is the ROI. So there are three dimensions of value: cost, pricing, and returns. Which ones of these do you need to take into account? How do you do that?
- What is the offering strategy (for the lack of a better term) of how the price is presented to the customer in an attractive way. This is the main point brought forward in the CodeKata website.
  - Three cans for twp euros. This uses the advantage of expressing prices in full numbers, which are easier to comprehend and therefore more attractive. Let's call this Full Numbers Pricing approach.
  - $1.99/pound. In our case, it could be 3 € per kilo. In our case, this is secondary pricing, printed in small print on the price tag, so this is not part of the offering strategy in this example, but maybe considered later.
  - Take three, pay two. This means that when a certain number of items accumulate to the purchase, some items will be marked free. I will call this Nth for Free approach.

Next, I will consider the two most relevant offering strategies, the Full Numbers Pricing (FNP) and Nth For Free (NFF).

## Full Numbers Pricing

Three cans would normally cost 2,25 €, but if we round it down to 2 €, it is easier and more attractive on a price tag.

Let's say a customer buys eight cans. That makes two sets of the offering batch, plus two normal. How do you express this in a nice algorithm? You need the following parameters:

Number of purchase items (purchase): 8
Offering batch price (batchPrice): 2 €
Offering batch size (batchSize): 3
Normal price per one (normalPrice): 2,25 €

So the formula might go like:

```javascript
function calculateTotalPrice(purchase, batchSize, batchPrice, normalPrice) {
  return (
    ((purchase - (purchase % batchSize)) / batchSize) * batchPrice +
    (purchase % batchSize) * normalPrice
  );
}
```

This is the cleanest algorithm I could think of with full numbers pricing, and how to implement it in the programming logic, but this could be improved, I tihnk.
