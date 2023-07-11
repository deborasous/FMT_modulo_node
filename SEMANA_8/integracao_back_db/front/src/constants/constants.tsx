interface Field {
  visible: boolean;
}

interface FieldsCategory {
  id: Field;
  name: Field;
  createdAt: Field;
  updatedAt: Field;
  deletedAt: Field;
}

interface FieldsTrainee {
  id: Field;
  name: Field;
  email: Field;
  rg: Field;
  cpf: Field;
  primaryPhoneContact: Field;
  secondaryPhoneContact: Field;
  dateBirth: Field;
  fatherName: Field;
  motherName: Field;
  haveSpecialNeeds: Field;
  createdAt: Field;
  updatedAt: Field;
  deletedAt: Field;
}

interface FieldsContract {
  id: Field;
  category: Field;
  categoryId: Field;
  company: Field;
  companyId: Field;
  createdAt: Field;
  deletedAt: Field;
  endValidity: Field;
  extra: Field;
  remuneration: Field;
  startValidity: Field;
  status: Field;
  trainee: Field;
  traineeId: Field;
  updatedAt: Field;
  traineeName: Field;
  primaryPhoneContact: Field;
  companyName: Field;
  supervisorName: Field;
}

const fieldsCategory: FieldsCategory = {
  id: {
    visible: false
  },
  name: {
    visible: true
  },
  createdAt: {
    visible: false
  },
  updatedAt: {
    visible: false
  },
  deletedAt: {
    visible: false
  }
};

const fieldsTrainee: FieldsTrainee = {
  id: {
    visible: false
  },
  name: {
    visible: false
  },
  email: {
    visible: true
  },
  rg: {
    visible: false
  },
  cpf: {
    visible: false
  },
  primaryPhoneContact: {
    visible: true
  },
  secondaryPhoneContact: {
    visible: true
  },
  dateBirth: {
    visible: false
  },
  fatherName: {
    visible: false
  },
  motherName: {
    visible: false
  },
  haveSpecialNeeds: {
    visible: true
  },
  createdAt: {
    visible: false
  },
  updatedAt: {
    visible: false
  },
  deletedAt: {
    visible: false
  }
};

const fieldsContract: FieldsContract = {
  id: {
    visible: false
  },
  category: {
    visible: false
  },
  categoryId: {
    visible: false
  },
  company: {
    visible: false
  },
  companyId: {
    visible: false
  },
  createdAt: {
    visible: false
  },
  deletedAt: {
    visible: false
  },
  endValidity: {
    visible: false
  },
  extra: {
    visible: false
  },
  remuneration: {
    visible: false
  },
  startValidity: {
    visible: false
  },
  status: {
    visible: false
  },
  trainee: {
    visible: false
  },
  traineeId: {
    visible: false
  },
  updatedAt: {
    visible: false
  },
  traineeName: {
    visible: true
  },
  primaryPhoneContact: {
    visible: true
  },
  companyName: {
    visible: true
  },
  supervisorName: {
    visible: true
  }
};

export { fieldsCategory, fieldsTrainee, fieldsContract };
