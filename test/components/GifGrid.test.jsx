import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
    
    const category = 'Messi'
    
    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category}/>)
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

    })

    test('debe de mostrar items cuando se cargan las imagenes de useFetchGifs', () => { 
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Messi',
                url: 'https://localhost/messi.jpg'
            },
            {
                id: '123',
                title: 'Futurama',
                url: 'https://localhost/futurama.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        
        render(<GifGrid category={category} />) 
        expect(screen.getAllByRole('img').length).toBe(2);
        // screen.debug();
    })
})