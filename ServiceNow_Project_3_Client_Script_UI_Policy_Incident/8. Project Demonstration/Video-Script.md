# Video Demonstration Script

## Scene 1 – Introduction

**Speaker:**

“Hello everyone. Our project title is *Project 3: Implement Client Script & UI Policy (Incident)*. The technology track is ServiceNow Administrator.

The purpose of this project is to configure the Incident form using UI Policies and Client Scripts to improve form behavior and data quality.”

## Scene 2 – Problem Statement

“Incident forms can require different information depending on the situation. Our project uses dynamic form behavior to make the user experience more controlled and consistent.”

## Scene 3 – Show UI Policy

“Here we can see the UI Policy configured for the Incident table. The policy checks the selected condition and applies the required field behavior.”

Show:

- Table
- Condition
- UI Policy Action

## Scene 4 – Show Client Script

“Next, this is the Client Script. It uses the `g_form` API to read and change values or field behavior on the Incident form.”

Show the script configuration.

## Scene 5 – Live Demonstration

1. Open an Incident.
2. Set the trigger value.
3. Show the field becoming mandatory/read-only/visible.
4. Change the value back.
5. Show the behavior changing accordingly.

## Scene 6 – Validation

“Now we test invalid input. The Client Script prevents submission and displays an error message.”

Enter invalid input and attempt submission.

## Scene 7 – Successful Submission

“After correcting the input, the Incident can be submitted successfully.”

## Scene 8 – Conclusion

“This project demonstrates the use of ServiceNow UI Policies and Client Scripts on the Incident table. We also tested the configured behavior and documented the results.”

## Closing

“Thank you.”
