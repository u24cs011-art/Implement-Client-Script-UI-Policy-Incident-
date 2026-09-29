# Client Scripts

## Script 1 – onChange

**Purpose:** Dynamically control a field when the selected Incident field changes.

### Example

```javascript
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }

    if (newValue == '1') {
        g_form.setMandatory('description', true);
    } else {
        g_form.setMandatory('description', false);
    }
}
```

> Replace `'description'` and `'1'` with the field/value required by your project.

## Script 2 – onSubmit

**Purpose:** Validate a field before submitting an Incident.

```javascript
function onSubmit() {
    var shortDescription = g_form.getValue('short_description');

    if (shortDescription.trim() == '') {
        g_form.addErrorMessage('Short description is required.');
        return false;
    }

    return true;
}
```

## Important

Use actual dictionary field names, not display labels, in `g_form` methods.
