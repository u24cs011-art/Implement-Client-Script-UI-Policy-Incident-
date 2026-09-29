# Process Flow

```text
User opens Incident form
        |
        v
User enters/changes Incident information
        |
        v
UI Policy condition evaluated
        |
   +----+----+
   |         |
 TRUE      FALSE
   |         |
   v         v
Apply UI    Restore normal
Policy      behavior
   |
   v
Client Script executes when configured
   |
   v
Validate / manipulate form with g_form
   |
   v
User submits form
   |
   v
onSubmit validation
   |
   +----+----+
   |         |
 Valid     Invalid
   |         |
   v         v
Submit    Stop + show message
```
