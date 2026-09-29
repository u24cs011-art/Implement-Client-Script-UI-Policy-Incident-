# Step-by-Step Implementation

## Step 1 – Open Incident Table

1. Log in to your ServiceNow instance.
2. Navigate to the Incident list/form.
3. Confirm the target table is `incident`.

## Step 2 – Create UI Policy

1. Navigate to the UI Policy configuration area.
2. Select **New**.
3. Set Table to **Incident**.
4. Enter a meaningful Short description.
5. Define the condition.
6. Save the UI Policy.
7. Add UI Policy Actions.
8. Set the selected field to Mandatory, Visible, or Read-only as required.
9. Test the condition.

## Step 3 – Create Client Script

1. Navigate to Client Scripts.
2. Select **New**.
3. Set Table to **Incident**.
4. Select the appropriate Type: `onChange`, `onLoad`, or `onSubmit`.
5. Select the Field for an `onChange` script.
6. Add the JavaScript logic.
7. Save the script.
8. Open an Incident and test it.

## Step 4 – Validate

Test both condition paths:

- Condition true.
- Condition false.

## Step 5 – Capture Evidence

Take screenshots of:

- UI Policy configuration.
- UI Policy Action.
- Client Script configuration.
- Incident form before condition.
- Incident form after condition.
- Validation message.
