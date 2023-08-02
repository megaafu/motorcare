
interface MappedData {
  client_name: string;
  email: string;
  delegation: string;
  type_statistic: "Pecas" | "Pneus"| "Acessorios"|"Test-Drive"| "Revisao"| "Reparacao"| "Diagnostico"| "Pintura"
  type_requester: 'Individual' | 'Empresa'
  
}

export function mapFormData(data: any): MappedData {
  const { name, email, delegation, client,service_categories } = data;
  const mappedData: MappedData = {
    client_name:name,
    email:email,
    delegation:delegation,
    type_statistic:service_categories==="Parts" || service_categories === "Peças"?"Pecas":service_categories==="Tires" || service_categories ==="Pneus"? "Pneus":service_categories==="Acessories" || service_categories ==="Acessórios"?"Acessorios":service_categories==="Revision" || service_categories==="Revisão"?"Revisao":service_categories==="Reparation" || service_categories==="Reparação"?"Reparacao":service_categories==="Diagnosis" ||service_categories==="Diagnóstico"?"Diagnostico":service_categories==="Panel Beating and Painting" ||service_categories ==="Bate Chapa e Pintura"?"Pintura":"Test-Drive" ,
    type_requester: client==='Empresa' || client==="Company" ?"Empresa" :"Individual",
  }

  return mappedData;
}
