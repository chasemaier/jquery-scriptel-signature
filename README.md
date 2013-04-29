# jQuery Scriptel Signature

A jQuery Plugin To Handle Support For [Scriptel ST1501U Web Signature Pad](http://www.scriptel.com/products/scriptouch-signature-pads/st1501-web-signature-pad)

## Characters:
  * **start**: Right Brace `}`
  * **pen up**: Space `&nbsp;`
  * **complete**: Right Bracket `]`

## Signature Preamble
When a signature transmission is started, an identifying sequence is sent to the host before the first coordinate data. This sequence consists of:
  1. a “start” character
  1. the string “SCRIPTEL"
  1. a “pen up” character
  1. a variable length string containing the protocol version – currently "A"
  1. a “pen up” character
  1. a variable length string containing the device model – e.g. "ST1501"
  1. a “pen up” character
  1. a variable length string containing the firmware version – e.g. "01.00.04"
  1. a “pen up” character

**Example Signature Preamble**: `}SCRIPTEL A ST1501 01.00.04 ` (includes a trailing space)

## Signature Encoding Scheme

The actual signature is encoded as follows:
  1. A radix-23 encoding scheme is used to convert coordinate values from 0 to 499 into two characters ("digits").
  1. The most significant "digit" and the least significant "digit" are converted to key codes using different encoding tables to ensure that both "digits" can be transmitted simultaneously.
  1. The X coordinate key codes are transmitted with the “Shift” indicator set TRUE while the Y coordinates are transmitted with the “Shift” indicator set FALSE.
  1. A coordinate point will always consist of two “shifted” key codes followed by two “un-shifted” key codes.

**Example Coordinates Point**: `F?7;` (`F?` is X, `;7` is Y)

The decoder function can be used to identify the numerical values as follows:
  * `F == 15` Found In Most Significant Digits For X
  * `? == 18` Found In Least Significant Digits For X
  * We know `X = (MSD*23) + LSD`, so `X = (15 * 23) + 18` or `X = 363`
  * `; == 19` Found In Least Significant Digits For Y
  * `7 == 7` Found In Most Significant Digits For Y
  * We know `Y = (MSD * 23) + LSD`, so `Y = (7 * 23) + 19` or `Y = 180`
  * Therefore, we have our point at `(363, 180)`

Note that while the coordinate pair will come as two "shifted" key codes (the full X value) followed by two "un-shifted" key codes (the full Y value), the order of the Most Significant Digit (MSD) and the Least Significant Digit (LSD), together making up either the X or Y value, cannot be assumed but must be determined using the decoder mapping. E.g. `F?7;` == `F?;7` == `?F7;` == `?F;7` and all represent the same point (363, 180).

## Signature Termination

The signature is defined as complete when the user selects and releases the "OK" button on the signature pad. This causes a special "complete" character to be reported to the host. There may or may not be a "pen up" reported prior to "complete".

## Full Signature Example

**Full Short Signature Example**: `}SCRIPTEL A ST1501 01.00.04 ${a'%Ma[%Nbm%Obr%Obs%Obt%Obu%Obw%Obx%Obw%Obv ^Ub;^Ub=^Ub[^Ub\^Ub[ ]`
