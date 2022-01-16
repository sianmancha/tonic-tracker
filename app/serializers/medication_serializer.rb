class MedicationSerializer < ActiveModel::Serializer
  attributes :id, :name, :use, :amount, :refillable, :dose, :frequency, :active
end
