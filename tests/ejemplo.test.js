// tests/ejemplo.test.js

describe('Ejemplo básico de test', () => {
  test('debe pasar siempre', () => {
    // Arrange (Preparar)
    const a = 2;
    const b = 2;

    // Act (Actuar)
    const resultado = a + b;

    // Assert (Verificar)
    expect(resultado).toBe(4);
  });
});
