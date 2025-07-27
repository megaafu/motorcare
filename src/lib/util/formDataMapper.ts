interface MappedData {
  client_name: string;
  email: string;
  delegation: string;
  type_statistic:
    | "Pecas"
    | "Pneus"
    | "Acessorios"
    | "Test-Drive"
    | "Revisao"
    | "Reparacao"
    | "Diagnostico"
    | "Pintura";
  type_requester: "Individual" | "Empresa";
}

interface RawFormData {
  name: string;
  email: string;
  delegation: string;
  client: string;
  service_categories: string;
}

export function mapFormData(data: RawFormData): MappedData {
  const { name, email, delegation, client, service_categories } = data;

  const serviceMap: Record<string, MappedData["type_statistic"]> = {
    Parts: "Pecas",
    Peças: "Pecas",
    Tires: "Pneus",
    Pneus: "Pneus",
    Acessories: "Acessorios",
    Acessórios: "Acessorios",
    Revision: "Revisao",
    Revisão: "Revisao",
    Reparation: "Reparacao",
    Reparação: "Reparacao",
    Diagnosis: "Diagnostico",
    Diagnóstico: "Diagnostico",
    "Panel Beating and Painting": "Pintura",
    "Bate Chapa e Pintura": "Pintura",
  };

  const type_statistic =
    serviceMap[service_categories] ?? "Test-Drive";

  const type_requester: MappedData["type_requester"] =
    client === "Empresa" || client === "Company"
      ? "Empresa"
      : "Individual";

  return {
    client_name: name,
    email,
    delegation,
    type_statistic,
    type_requester,
  };
}
