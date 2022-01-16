class UserMedicationSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :medication
end
