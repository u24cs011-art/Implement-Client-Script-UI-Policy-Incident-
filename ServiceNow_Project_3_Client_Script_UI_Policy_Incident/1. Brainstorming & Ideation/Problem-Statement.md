# Problem Statement

## Existing Problem

The Incident form contains several fields that may not always require the same behavior. For example, when an Incident becomes high priority, additional information may be required from the user.

Without dynamic form behavior:

- Users may submit incomplete information.
- Important fields may not be completed.
- Users may enter invalid values.
- The form may display unnecessary fields.
- Data quality can become inconsistent.

## Proposed Solution

Use ServiceNow **UI Policies** and **Client Scripts** on the Incident table.

### UI Policy

Use UI Policies for straightforward form behavior such as:

- Making a field mandatory.
- Making a field read-only.
- Hiding/showing a field.

### Client Script

Use Client Scripts for logic that requires JavaScript and the `g_form` API.

## Goal

Create a controlled Incident form that provides immediate feedback to users and improves the quality of Incident data.
