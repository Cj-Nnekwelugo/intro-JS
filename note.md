A school grading system works like this:

90 and above → Grade A
70 to 89 → Grade B
50 to 69 → Grade C
Below 50 → Fail

Write a JavaScript if...else if...else statement that checks the score and prints the correct grade.


NB:Common Beginner Mistakes

❌ Forgetting break.

❌ Forgetting default.

❌ Using switch for ranges like:

switch(score >= 50)

This is not how switch is typically used. Use if...else for ranges.




Interview Tip

Sometimes interviewers ask:

When should I use switch instead of if...else?

A simple answer is:

Use switch when you're checking one variable against many exact values.
Use if...else when you're checking ranges or different conditions.

break, break tells JavaScript to stop executing the switch statement after a matching case has been found and executed.