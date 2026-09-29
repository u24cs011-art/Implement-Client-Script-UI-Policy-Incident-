# UI Policy Test Cases

| ID | Test Scenario | Condition | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|
| UI-001 | High priority selected | Condition TRUE | Target field becomes mandatory | `[Fill]` | `[ ]` |
| UI-002 | Priority changed away from high | Condition FALSE | Target field returns to normal state | `[Fill]` | `[ ]` |
| UI-003 | Completed state selected | Condition TRUE | Selected field becomes read-only | `[Fill]` | `[ ]` |
| UI-004 | Normal state selected | Condition FALSE | Field is editable | `[Fill]` | `[ ]` |
| UI-005 | Form loaded with matching condition | TRUE | Expected UI Policy behavior is applied | `[Fill]` | `[ ]` |
| UI-006 | Form loaded without matching condition | FALSE | Normal behavior is retained | `[Fill]` | `[ ]` |

## Evidence

Attach a screenshot for each important test:

`../7. Project Documentation/screenshots/UI-001.png`
