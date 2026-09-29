# Configuration Guide

## 1. UI Policy Configuration

Document each UI Policy using:

- Name
- Table
- Condition
- On load setting
- UI Policy Actions
- Reason for the configuration

## 2. Client Script Configuration

Document each Client Script using:

- Name
- Table
- Type
- Field
- Condition
- Script
- Purpose

## 3. Verification

Open a new Incident and verify each condition from the test plan.

## 4. Rollback

If a configuration causes an unwanted behavior:

1. Identify the affected UI Policy or Client Script.
2. Temporarily deactivate it.
3. Reproduce the issue.
4. Correct the configuration.
5. Retest before reactivating.
