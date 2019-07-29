let faker = require('faker');

module.exports = () => {
    const data = [];
    for (let i = 1; i < 51; i++) {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = faker.internet.email();
        const phone = faker.phone.phoneNumber('##########');
        const isActive = faker.random.boolean();
        data.push({
            "id": i,
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "phone": phone,
            "status": isActive ? "active" : "inactive",
        })
    }
    return { contacts: data };
}