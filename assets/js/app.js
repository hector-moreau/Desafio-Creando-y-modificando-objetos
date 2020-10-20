function Clinic(namecli, patients){
this.namecli=namecli,
this.patients=patients || [];

}

function Patients(namepat, age, rut, diagnosis){
  this.namepat=namepat;
  this.age=age;
  this.rut=rut;
  this.diagnosis=diagnosis;
}

var patients1= new Patients('Sebastian', '30', '12.123.123-2', 'Resfrio');
var patients2= new Patients('Cristobal', '35', '12.124.123-3', 'Catarro');
var patients3= new Patients('Michelle', '25', '12.122.123-1', 'Alergia');

var clinic1= new Clinic('Clinica Las Condes',[patients1,patients2,patients3]);

console.log(clinic1, patients1,patients2,patients3)


// Agregar nuevos pacientes a la clinica existente

Clinic.prototype.getPatients = function(){
  return this.patients
}

Clinic.prototype.setPatients = function(patients){
  return this.patients.push(patients)
}


// Buscar pacientes en la clinica existente

Clinic.prototype.seekPatients = function(search){
  return this.patients.find(function(patients){
    return patients.namecli === search
  })
}


// Agregar nuevas clinicas

Clinic.prototype.setNamecli = function(namecli){
  this.namecli = namecli
}

Clinic.prototype.getNamecli = function(){
  return this.namecli
}

// Agregar nuevos pacientes

Clinic.prototype.setNamepat = function(namepat){
  this.namepat = namepat
}

Clinic.prototype.getNamepat = function(){
  return this.namepat
}

Clinic.prototype.setAge = function(age){
  this.age = age
}

Clinic.prototype.getAge = function(){
  return this.age
}

Clinic.prototype.setRut = function(rut){
  this.rut = rut
}

Clinic.prototype.getRut = function(){
  return this.rut
}

Clinic.prototype.setDiagnosis = function(diagnosis){
  this.diagnosis = diagnosis
}

Clinic.prototype.getDiagnosis= function(){
  return this.diagnosis
}
