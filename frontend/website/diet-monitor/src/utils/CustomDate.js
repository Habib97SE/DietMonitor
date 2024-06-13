class CustomDate {
    static today() {
        return new Date();
    }

    static isDateInPast (date) {
        return date < CustomDate.today();
    }

    static isDateInFuture (date) {
        return date > CustomDate.today();
    }

    static sixteenYearsAgo() {
        const today = CustomDate.today();
        return new Date(today.getFullYear() - 16, today.getMonth(), today.getDate());
    }

}
