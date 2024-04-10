import React from 'react'

const LoadPhotos = ({photos, nextPageToken, fetchNextPage}) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {photos.map((photo, index) => (
            <div key={index} className="rounded max-w-sm overflow-hidden shadow-lg">
              <img src={photo} loading="lazy" alt={`Photo ${index}`} className="w-full" />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">Photo {index + 1}</div>
                {/* Add more photo details here if available */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {nextPageToken && (
        <div className="mt-4 text-center">
          <button
            onClick={(e) => {
              e.preventDefault()
              fetchNextPage(nextPageToken)
            }}
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Load More
          </button>
        </div>
      )}
    </>
  )
}

export default LoadPhotos
