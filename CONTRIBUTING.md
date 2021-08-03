# Contribution to PYJS123/random-quote-machine
## Non-contributors
### Adding quotes
Thank you for considering adding quotes- it really means a lot to us. Follow these steps:
1. Clone/fork this project
2. Navigate to quotes.json
3. Add your quote in this format: `{"quote": "quoteIsHere", "author": "authorIsHere"}`. Remember:
    1) Add a comma to the end of the previous entry
    2) Enter the new one before the end square brackets
4. Navigate to quote.js
5. At the top, in the following code:
   ```
   /*
    Quotes in quotes.json from:
    - https://blog.hubspot.com/sales/famous-quotes
    */
    ```
    , underneath the last entry, in the comment (adding a hyphen and a space to show it is in the list), credit (if applicable) the place you found the quote in
6. Make a pull request
7. At this point, me or one of my contributors will see your changes and validate them.


## Contributors
### Adding quotes
This is quite similar to [the rules for non-contributors](https://github.com/PYJS123/random-quote-machine/blob/master/CONTRIBUTING.md#adding-quotes), with a difference that instead of cloning or forking, you can create a new branch, including information like name, and in the commit(s) you make, include ample information as to your intentions and changes. Proceed with steps 2-5, and then let at least 1 of your contributors, preferably me included ([PYJS123](https://github.com/PYJS123)), validate your changes and merge.
