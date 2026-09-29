// ServiceNow Client Script Examples
// Project 3: Client Script & UI Policy (Incident)

// Example 1: Set a field mandatory
g_form.setMandatory('description', true);

// Example 2: Remove mandatory state
g_form.setMandatory('description', false);

// Example 3: Make a field read-only
g_form.setReadOnly('assignment_group', true);

// Example 4: Make a field editable
g_form.setReadOnly('assignment_group', false);

// Example 5: Show a field
g_form.setVisible('description', true);

// Example 6: Hide a field
g_form.setVisible('description', false);

// Example 7: Read a field value
var priority = g_form.getValue('priority');

// Example 8: Display an informational message
g_form.addInfoMessage('Incident form updated.');

// Example 9: Display an error message
g_form.addErrorMessage('Please correct the highlighted information.');

// Example 10: Set a field value
g_form.setValue('description', 'Example text');
