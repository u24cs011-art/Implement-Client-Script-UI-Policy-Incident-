# Client Script Design

## Client Script A – onChange

**Table:** Incident  
**Type:** onChange  
**Field:** Priority or another selected Incident field

### Logic

1. Read the new field value.
2. Check whether the business condition is true.
3. Use `g_form.setMandatory()` / `g_form.setReadOnly()` / `g_form.setVisible()` as required.
4. Reset the field behavior when the condition becomes false.

## Client Script B – onSubmit

**Table:** Incident  
**Type:** onSubmit

### Logic

1. Read the required field.
2. Validate the value.
3. Display an error message if invalid.
4. Return `false` to stop submission.
5. Return `true` when validation succeeds.
