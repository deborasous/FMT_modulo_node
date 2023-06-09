function buscarDDD(ddd) {
  const dddsEstado = {
    Acre: [68],
    Alagoas: [82],
    Amapá: [96],
    Amazonas: [92, 97],
    Bahia: [71, 73, 74, 75, 77],
    Ceará: [85, 88],
    "Distrito Federal": [61],
    "Espírito Santo": [27, 28],
    Goiás: [62, 64],
    Maranhão: [98, 99],
    "Mato Grosso": [65, 66],
    "Mato Grosso do Sul": [67],
    "Minas Gerais": [31, 32, 33, 34, 35, 37, 38],
    Pará: [91, 93, 94],
    Paraíba: [83],
    Paraná: [41, 42, 43, 44, 45, 46],
    Pernambuco: [81, 87],
    Piauí: [86, 89],
    "Rio de Janeiro": [21, 22, 24],
    "Rio Grande do Norte": [84],
    "Rio Grande do Sul": [51, 53, 54, 55],
    Rondônia: [69],
    Roraima: [95],
    "Santa Catarina": [47, 48, 49],
    "São Paulo": [11, 12, 13, 14, 15, 16, 17, 18, 19],
    Sergipe: [79],
    Tocantins: [63],
  };

  for (const [estado, ddds] of Object.entries(dddsEstado)) {
    if (ddds.includes(ddd)) {
      return estado;
    }
  }

  return "DDD não encontrado";
}

module.exports = buscarDDD;
