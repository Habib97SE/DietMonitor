class HelpMethods {
    static createProfileImage = (firstName, lastName) => {
        if (firstName === undefined || lastName === undefined) {
            return "https://ui-avatars.com/api/?name=U&background=random&rounded=true&size=150&bold=true&color=fff&font-size=0.33&length=1";
        }
        const firstLetter = firstName.charAt(0).toUpperCase();
        const secondLetter = lastName.charAt(0).toUpperCase();
        return `https://ui-avatars.com/api/?name=${firstLetter}-${secondLetter}&background=random&rounded=true&size=150&bold=true&color=fff&font-size=0.33&length=2`;
    }
}

export default HelpMethods;