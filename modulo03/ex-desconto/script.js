    const nome = "Pedro";
    const precoProd = 200;
    const percDesconto = 15;

    let v_desconto = (precoProd*percDesconto)/100;

    let resultado = precoProd - v_desconto;

    console.log(`Ola, ${nome}! O produto custa R$ ${precoProd}`);
    console.log(`Desconto de ${percDesconto}%: R$ ${v_desconto}`);
    console.log(`Preço final:R$ ${resultado}`);
    
    let maior100 = precoProd > 100;

    console.log(`Preço acima de R$ 100? ${maior100}`);

    let des_valido = percDesconto >= 0 && percDesconto <= 100;

    console.log(`Desconto válido? ${des_valido}`);

