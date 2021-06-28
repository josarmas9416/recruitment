const BaseRepository = require("./base.repository");
let _contact = null;
class ContactRepository extends BaseRepository {
    constructor({ Contact }){
        super(Contact);
        _contact = Contact;
    }
}

module.exports = ContactRepository;
