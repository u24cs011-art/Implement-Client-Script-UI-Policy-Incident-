# Incident Form Design

## Target Table

`incident`

## Suggested Fields

Use fields available in your ServiceNow instance. Common Incident fields include:

- Number
- Caller
- Short description
- Description
- Category
- Subcategory
- Impact
- Urgency
- Priority
- State
- Assignment group
- Assigned to
- Resolution notes

## Design Principle

Only configure fields that are relevant to the selected condition. Avoid hiding or locking fields unnecessarily.

## Example

**Condition:** Priority is 1 - Critical

**Action:** Make a selected explanation field mandatory.

**Reason:** Critical incidents should contain enough information for support teams to understand the situation.
