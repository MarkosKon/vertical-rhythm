# Vertical rhythm

1. [Shift the letters.](https://github.com/MarkosKon/vertical-rhythm/tree/shift) This results in correct vertical rhythm; the rest break the rhythm and recover it (when using different sizes). An app that helps with the math: http://nowodzinski.pl/syncope
2. [Subtract the extra leading.](https://github.com/MarkosKon/vertical-rhythm/tree/subtract-extra-lead) Not correct because it ignores the extra space in the glyph; see the above.
3. [Use one font-size.](https://github.com/MarkosKon/vertical-rhythm/tree/use-one-size) You don't break the rhythm if you only use one size.
4. [Use one font-size (no bold).](https://github.com/MarkosKon/vertical-rhythm/tree/use-one-size-book)
5. [Keep font-size and change the line-height.](https://github.com/MarkosKon/vertical-rhythm/tree/keep-size-change-line-height) Not correct but good enough. An app that does the same thing: https://www.gridlover.net/try
6. [Keep the line-height and change the font-size.](https://github.com/MarkosKon/vertical-rhythm/tree/keep-line-height-change-font-size) The opposite of the above if the line height is awkward (for example, 1.2 line height for a 60px heading).
7. Define a line-height and font-size and split the difference in the margins. You have to know the number of lines in advance (impossible in the web?), otherwise, you break the rhythm.
8. Combine elements. The same as above.
