import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import TransactionsPage from '../transactions/page';

jest.mock('next-auth/react');
jest.mock('next/navigation');

describe('TransactionsPage', () => {
    beforeEach(() => {
        useSession.mockReturnValue({ data: {} });
        useRouter.mockReturnValue({ push: jest.fn() });
    });

    test('renders transactions correctly', () => {
        render(<TransactionsPage />);
        const transactionRows = screen.getAllByRole('row');
        expect(transactionRows).toHaveLength(15);
    });

    test('displays transaction details correctly', () => {
        render(<TransactionsPage />);
        const firstTransaction = screen.getByText("Payment from John Doe");
        expect(firstTransaction).toBeInTheDocument();
    });
});
