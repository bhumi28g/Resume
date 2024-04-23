const submitForm = async (userData) => {
    try {
        const response = await fetch('/api/save-cv', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        if (!response.ok) {
            throw new Error('Failed to save CV');
        }
        const responseData = await response.json();
        console.log('CV data saved successfully:', responseData);
        // Optionally, you can show a success message to the user
    } catch (error) {
        console.error('Error saving CV:', error.message);
        // Optionally, you can show an error message to the user
    }
};

// Modify generateCV function to call submitForm
const generateCV = () => {
    let userData = getUserInputs();
    submitForm(userData);
    displayCV(userData);
};