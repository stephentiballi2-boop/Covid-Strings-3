doc.type. html
html lang en
script
header=document create.element(header)
header.style.backgroundcolor=#4caf50
header.style.color=’white’
header.style.padding=’10px’
header.style.textalign=’center’
header.style.text.fontsize=’24px’
header.textcontent=’welcome to covid strings3’
document appendchild(header)
<header.html>
heading variables 
the heading numbers that determine where each heading and subheading go 
heading1=game plays overview
heading2=covid strings calculator 
heading3=thought box 
subheading1=calculator interface
subheading2=calculator functionality
subheading3=black thought box
subheading4=purple thought box
subheading5=pink thought box
subheading6=turquoise thought box
subheading7=violet thought box
subheading8=teal thought box
subheading9=yellow thought box
subheading10=orange thought box
filename=covid strings3 game plays.js
<header.html>
game plays overview
an overview of covid string game plays
string unit=style for non-concatenated strings 
string array=style for concatenated strings 
blank=part of string that user must answer
user answer=individual users answer
team answer=teams answer
user in select string category
if category==non-concatenated
user.fill blank in string unit
else:
remain
if category==concatenated
user.fill blank in string array
else:
remain
if selected question==multiple choice
user in select a,b,c,d
else:
remain
if hyperlink from meta==reference
user in.select hyperlink
else 
remain 
if selected question==math problem
open covid strings calculator 
else:
remain
<header.html>
calculator 
the calculator used for players to calculate math problems in covid strings3
covid strings calculator=calculator for math problems
operations=addition,subtraction,multiplication,division
if operation==addition:
return addition
else:
remain
if operation==subtraction:
return subtraction
else:
remain
if operation==multiplication:
return multiplication
else:
remain
if operation==division
return division
else:
remain
user in select covid strings calculator
<subheading.html>
calculator interface
the user interface of the covid strings calculator 
<doc type.html>
html lang en
<head>
utf8
“viewport” content=width device-width inital scale 1.0
<title> simple calculator /<title>
<style>
body{
font family arial sans serif
display:flex
justify content:center
align items:center
height 100vh;
background-color:f0f0f0
calculator
background color fff
padding 20px
border radius 10px
box-shadow 00 10px rgba(0,0,0,0.1);
display 
width 100%
height 40px
margin-bottom:10px;
text-align:right;
padding:10px;
font-size:1.5em;
border: 1px solid ccc
border-radius 5px
buttons 
display:grid;
grid-template-Columns:Repeat (4,1 Fr)
gap:10Px;
.button 
padding 20px
font size 1.2em
border:none
border radius:5px 
cursor:pointer;
background color f9f9f9
box shadow 0 2Px 5pxrgba(0,0,0,0.1);
button operator
background color ff9500
color:fff
button equal
background color 34c759
color fff
grid column span 2
button clear
background color ff3b30
color fff
grid column span 2
<style>
<head>
<body>
<div class= “calculator”
<input type=”text” class=”display” id “display”=disabled>
<div class buttons”>
<Button Class “Button” On Click=”AppendNumber(‘0’)>0<Button
<Button Class “Button” On Click=”AppendNumber(‘1’)>1<Button
<Button Class “Button” On Click=”AppendNumber(‘2’)>2<Button
<Button Class “Button” On Click=”AppendNumber(‘3’)>3<Button
<Button Class “Button” On Click=”AppendNumber(‘4)>4<Button
<Button Class “Button” On Click=”AppendNumber(‘5’)>5<Button
<Button Class “Button” On Click=”AppendNumber(‘6’)>6<Button
<Button Class “Button” On Click=”AppendNumber(‘7’)>7<Button
<Button Class “Button” On Click=”AppendNumber(‘8’)>8<Button
<Button Class “Button” On Click=”AppendNumber(‘9’)>9<Button
<Button Class “Button” On Click=”AppendNumber(‘.’)>.<Button
Button Class Operator On Click =Choose Operation (Addition) Button
Button Class Operator On Click=Choose Operation (Subtraction) Button
Button Class Operator On Click =Choose Operation (Multiplication) Button
Button Class Operator On Click =Choose Operation (Division) Button
Button Class =”Button Equal On Click Compute ()=</Button>
Button Class = “Button Clear” On Click =Clear Display Button >C< /Button>
Div
Div
Src= “Calculator.Js”>
<Script>
</Body>
</Html>
<Subheading.Html>
Calculator Functionality
The Operation Organization For Practical Use Of The Covid Strings Calculator
Let Display=Document Get Element By Id (‘Display)
Let CurrentOperand=’’
Let Previous Operand=’’
Let Operation =Undefined
Append Number
If (Number ===’.’& CurrentOperand.Includes(‘.’)Return;
currentoperand=currentoperand.tostring()+number.tostring();
updatedisplay();
choseoperation(op)
if(currentoperand===’’)
if(previousoperand!==’’)
compute
let computation
prev=parsefloat(previousoperand)
current=parsefloat(currentoperand)
<header.html>
thought box
a place to type your thoughts on what the answer is 
<doc type.html>
<html lang “en”>
<head>
utf8
“viewport” content =width device-width inital scale 1.0
<title> thought box /<title>
<style>
body{
font family arial sans serif
display:flex
justify content:center
align items:center
height 100vh;
background-color:f0f0f0
thought box 
background color fff
padding 20px
border radius 10px
box-shadow 00 10px rgba(0,0,0,0.1);
display 
width 300px
text align center
thought box input 
width 80%
padding:10px;
margin-bottom: 10px;
border:1px solid ccc
border-radius 5px
thought box button
padding 10px, 20px
border radius 5px
background color 007bff
color:fff
cursor:pointer;
thought box hover button
background color 0056b3
thought display 
margin-top 20px;
font-size 1.2em
color 333
<style/>
</head>
<body>
<div class= “thought box”
input type= “text” id=”thought input” 
click on button display thought>submit</button>
div class thought display id=”thought display
</div>
<script>
display thought
thought input=document.get element by id (‘thought display).value
though display=document.get element by id(‘thought display’)
thought display.text content= thought input
<script>
</body>
</html> 
covid strings team thought box=feature for teams to discuss what category to take and what each person thinks the correct answer to a question is 
prompt covid strings team thought box 
if user prompt covid strings team thought box ==correct answer
return answer 
else:
check answer
return filename
 

