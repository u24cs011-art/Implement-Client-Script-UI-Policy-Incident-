# UI Policies

## UI Policy Example 1

**Name:** Incident – High Priority Additional Information

**Table:** Incident

**Condition:** Priority is `1 - Critical` (or the corresponding value in your instance).

### UI Policy Action

Set the selected additional-information field:

- Mandatory = True
- Visible = True
- Read-only = False

## UI Policy Example 2

**Name:** Incident – Completed Record Read Only

**Table:** Incident

**Condition:** State is the completed state used by the instance.

### UI Policy Action

Set selected operational fields:

- Read-only = True

## Notes

UI Policies are preferred for straightforward field behavior. Use Client Scripts when custom procedural logic or validation is required.
