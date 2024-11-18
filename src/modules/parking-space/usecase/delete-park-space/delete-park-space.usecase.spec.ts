import DeleteParkingSpaceUsecase from './delete-parking-space.usecase';

const MockRepository = () => ({
  save: jest.fn(),
  find: jest.fn(),
  findAll: jest.fn(),
  delete: jest.fn().mockReturnValue(Promise.resolve(null)),
});

describe('DeleteParkingSpaceUsecase', () => {
  it('should delete a parking space', async () => {
    const parkingSpaceRepository = MockRepository();
    const usecase = new DeleteParkingSpaceUsecase(parkingSpaceRepository);

    await usecase.execute({
      id: '1',
    });

    expect(parkingSpaceRepository.delete).toHaveBeenCalledTimes(1);
  });
});
