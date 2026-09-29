# UI Policy Design

## UI Policy 1 – High Priority

**Table:** Incident  
**Condition:** Priority is 1 - Critical  
**On Load:** Optional, depending on desired behavior

### UI Policy Action

| Field | Mandatory | Visible | Read-only |
|---|---|---|---|
| Selected explanation field | True | True | False |

## UI Policy 2 – Closed/Resolved Behavior

**Condition:** State is the selected completed state used by your instance.

### UI Policy Action

| Field | Mandatory | Visible | Read-only |
|---|---|---|---|
| Selected operational field | Optional | True | True |

> Confirm the exact choice-list values in your ServiceNow instance before configuring the condition.
